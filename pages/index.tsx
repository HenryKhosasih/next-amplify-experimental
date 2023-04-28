import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

type Props = {
  formattedDate: string;
};

export default function Home({ formattedDate }: Props) {
  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center text-2xl`}
    >
      <p>
        Hello from AWS{" "}
        <span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Amplify
        </span>
        !
      </p>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <Link href="/ssr">
          View a server-side rendered page{" "}
          <NavigateNextIcon className="bg-cyan-500 rounded-lg" />
        </Link>
      </p>
    </main>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
