export async function load({ fetch }) {
  try {
    const res = await fetch(`https://api.koranime.fun/update/1`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: error.message };
  }
}
