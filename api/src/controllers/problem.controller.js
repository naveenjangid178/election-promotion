const Problem = require("../models/Problem")
const Counter = require("../models/Counter")

const generateProblemId = async () => {
  const now = new Date()

  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")

  const dateKey = `${year}${month}${day}`

  const counter = await Counter.findOneAndUpdate(
    {
      _id: dateKey,
    },
    {
      $inc: {
        sequence: 1,
      },
    },
    {
      new: true,
      upsert: true,
    }
  )

  const sequenceNumber = String(
    counter.sequence
  ).padStart(4, "0")

  return `DG-${dateKey}-${sequenceNumber}`
}

/*
|--------------------------------------------------------------------------
| Create Problem
|--------------------------------------------------------------------------
| POST /api/problems
|--------------------------------------------------------------------------
*/

const createProblem = async (req, res) => {
  try {
    const {
      fullName,
      fatherName,
      mobile,
      residentWard,
      village,
      problemWard,
      location,
      category,
      duration,
      affectedFamilies,
      description,
      affectsOthers,
      previousComplaintNumber,
      additionalInformation,
      confirmation,
    } = req.body

    // Required fields validation
    if (
      !fullName ||
      !fatherName ||
      !mobile ||
      !residentWard ||
      !village ||
      !problemWard ||
      !location ||
      !category ||
      !duration ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message:
          "कृपया सभी आवश्यक जानकारी भरें।",
      })
    }

    // Confirmation validation
    if (confirmation !== true) {
      return res.status(400).json({
        success: false,
        message:
          "कृपया जानकारी की पुष्टि करें।",
      })
    }

    // Mobile validation
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        message:
          "कृपया सही मोबाइल नंबर दर्ज करें।",
      })
    }

    // Generate unique Problem ID
    const problemId = await generateProblemId()

    // Create problem
    const problem = await Problem.create({
      problemId,

      fullName: fullName.trim(),
      fatherName: fatherName.trim(),
      mobile: mobile.trim(),

      residentWard,
      village,

      problemWard,
      location: location.trim(),

      category,
      duration,

      affectedFamilies:
        affectedFamilies ?? null,

      description: description.trim(),

      affectsOthers:
        affectsOthers || null,

      previousComplaintNumber:
        previousComplaintNumber?.trim() || null,

      additionalInformation:
        additionalInformation?.trim() || null,

      confirmation: true,

      status: "SUBMITTED",
    })

    return res.status(201).json({
      success: true,
      problemId: problem.problemId,
      message:
        "समस्या सफलतापूर्वक दर्ज की गई।",
    })
  } catch (error) {
    console.error(
      "Create problem error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "समस्या दर्ज करते समय सर्वर में समस्या आई।",
    })
  }
}

/*
|--------------------------------------------------------------------------
| Verify Problem
|--------------------------------------------------------------------------
| GET /api/problems/:problemId
|--------------------------------------------------------------------------
*/

const verifyProblem = async (req, res) => {
  try {
    const problemId =
      req.params.problemId
        ?.trim()
        .toUpperCase()

    if (!problemId) {
      return res.status(400).json({
        success: false,
        message:
          "Problem ID आवश्यक है।",
      })
    }

    const problem =
      await Problem.findOne({
        problemId,
      })

    if (!problem) {
      return res.status(404).json({
        success: false,
        message:
          "इस Problem ID से कोई समस्या नहीं मिली।",
      })
    }

    /*
     * Public verification API
     *
     * यहाँ हम applicant का पूरा
     * personal data return नहीं करेंगे।
     */

    let message =
      "आपकी समस्या सफलतापूर्वक दर्ज की गई है।"

    switch (problem.status) {
      case "UNDER_REVIEW":
        message =
          "आपकी समस्या समीक्षा के अधीन है।"
        break

      case "ASSIGNED":
        message =
          "आपकी समस्या संबंधित विभाग को सौंप दी गई है।"
        break

      case "IN_PROGRESS":
        message =
          "आपकी समस्या पर कार्य चल रहा है।"
        break

      case "RESOLVED":
        message =
          "आपकी समस्या का समाधान कर दिया गया है।"
        break

      case "CLOSED":
        message =
          "आपकी समस्या बंद कर दी गई है।"
        break

      default:
        message =
          "आपकी समस्या सफलतापूर्वक दर्ज की गई है।"
    }

    return res.status(200).json({
      success: true,

      problemId: problem.problemId,

      status: problem.status,

      message,

      category: problem.category,

      village: problem.village,

      problemWard: problem.problemWard,

      createdAt: problem.createdAt,

      updatedAt: problem.updatedAt,
    })
  } catch (error) {
    console.error(
      "Verify problem error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Problem ID की जानकारी प्राप्त करते समय सर्वर में समस्या आई।",
    })
  }
}

module.exports = {
  createProblem,
  verifyProblem,
}