const PREDICT_URL = process.env.PREDICT_URL || '';

export const predict = async (payload: string[]) => {
  const result = await fetch(`${PREDICT_URL}/predict/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await result.json();
  return data;
};
