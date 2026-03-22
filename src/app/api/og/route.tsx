import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

const font = fetch(
  new URL("../../../../fonts/Inter-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(request: Request) {
  const fontData = await font

  try {
    const { searchParams } = new URL(request.url)

    const hasTitle = searchParams.has("title")
    const title = hasTitle ? searchParams.get("title") : "Segundo Juan"

    const hasSiteUrl = searchParams.has("siteUrl")
    const siteUrl = hasSiteUrl ? searchParams.get("siteUrl") : "segu.work"

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-.02em",
            fontWeight: 700,
            background: "#0c0a09",
            color: "#fafaf9",
          }}
        >
          {/* Accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: "#5471b0",
            }}
          />
          <div
            style={{
              left: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                background: "#5471b0",
                borderRadius: 100,
              }}
            />
            <span
              style={{
                marginLeft: 10,
                fontSize: 18,
                color: "#a8a29e",
              }}
            >
              {siteUrl}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px 50px",
              margin: "0 42px",
              fontSize: 44,
              width: "auto",
              maxWidth: 700,
              textAlign: "center",
              lineHeight: 1.3,
              fontFamily: '"Inter"',
            }}
          >
            {title}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 42,
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              color: "#78716c",
            }}
          >
            Segundo Juan — Fullstack Engineer
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
          },
        ],
      }
    )
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
