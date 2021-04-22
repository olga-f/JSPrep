import { Skeleton } from "baseui/skeleton";
import { LoadingComponentProps } from "react-loadable";
const EditorSkeleton = ({ isLoading }: LoadingComponentProps) =>
  isLoading ? (
    <Skeleton width="100%" height="350px" animation />
  ) : (
   <div>Error!</div>
  );
export default EditorSkeleton;
