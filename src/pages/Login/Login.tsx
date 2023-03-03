import FormPane from "./FormPane";
import LogoPane from "./LogoPane";

function Login() {
  return (
    <div className="max-w-6xl h-full m-auto flex items-center justify-center">
      <div className="grid grid-cols-[1fr_minmax(16rem,auto)] px-24 pt-24 w-full">
        <LogoPane />
        <FormPane />
      </div>
    </div>
  );
}

export default Login;
