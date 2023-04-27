import NavigateNextIcon from "@mui/icons-material/NavigateNext";
type Props = {
  formattedDate: string;
};

export default function SSR({ formattedDate }: Props) {
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
      <p>This page is SSR-ed. It was built on {formattedDate}.</p>
      <p>
        <a href="/">
          View a static page{" "}
          <NavigateNextIcon className="bg-cyan-500 rounded-lg" />
        </a>
      </p>
    </main>
  );
}

export async function getServerSideProps() {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return { props: { formattedDate } };
}
