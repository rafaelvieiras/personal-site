import { components } from "../../../../slices";

export default function SliceMachine({ slices }) {
  return (
    <>
      {slices.map((slice, index) => {
        const SliceComponent = components[slice.slice_type];
        if (!SliceComponent) {
          return null;
        }
        return <SliceComponent slice={slice} key={`slice-${index}`} />;
      })}
    </>
  );
}
