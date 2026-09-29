const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api"

export async function submitProblem(problemData) {
  const response = await fetch(`${API_BASE_URL}/problems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(problemData),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(
      data?.message || "समस्या दर्ज नहीं हो सकी। कृपया पुनः प्रयास करें।",
    )
  }

  return data
}

export async function verifyProblem(problemId) {
  const response = await fetch(
    `${API_BASE_URL}/problems/${encodeURIComponent(problemId)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(
      data?.message || "Problem ID की जानकारी प्राप्त नहीं हो सकी।",
    )
  }

  return data
}