import { highlight } from "../../libs/highlight";
import "../../../../node_modules/highlight.js/styles/base16/darcula.css";

export default function CodeSlice({ slice }) {
  return (
    <pre className="hljs">
      <code
        style={{ whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{
          __html: highlight(slice.primary.code[0].text),
        }}
      ></code>
    </pre>
  );
}
