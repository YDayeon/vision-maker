import { SContainer, SFormcontainer, SHeader } from "@/styles/layout/form";
import { Props } from "src/types/common";

export default function LFormContainer({ children }: Props) {
  return (
    <SContainer>
      <SHeader />
      <SFormcontainer>{children}</SFormcontainer>
    </SContainer>
  );
}
