export async function onRequestGet(context) {
  const { request } = context;

  try {
    const API_TOKEN = "adb3ca178449bc63c7ecbb66";

    const url = new URL(request.url);
    const targetUrl = `https://rpmshare.com/api/v1/video/manage${url.search}`;

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "api-token": API_TOKEN,
        "accept": "application/json",
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Proxy error",
        message: err.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
