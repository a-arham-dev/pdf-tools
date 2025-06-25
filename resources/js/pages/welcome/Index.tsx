import Hero from "@/components/welcome/Hero";
import Services from "@/components/welcome/Services";
import Wrapper from "@/components/Wrapper";
import AppLayout from "@/layouts/AppLayout";

export default function Index() {
  return (
    <AppLayout title="Online PDF tools" footer={true}>
      <Wrapper className="max-w-screen-xl sm:py-8">
        <Hero />
        <Services />
      </Wrapper>
    </AppLayout>
  );
}
