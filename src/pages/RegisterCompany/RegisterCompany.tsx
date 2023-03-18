import { useMutation } from "@tanstack/react-query";
import { SyntheticEvent, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import CompanyInfo from "./steps/CompanyInfo";
import Project from "./steps/Project";
import Resources from "./steps/Resources";

import { Text, Button } from "@/components/atoms";
import { Stepper } from "@/components/molecules";
import type { StepperRef } from "@/components/molecules";
import { useEventCallback } from "@/hooks";
import { createCompany } from "@/services/company";
import { useCompanyFormData } from "@/store";

function RegisterCompany() {
  const { t } = useTranslation("registerStartup");

  const stepperRef = useRef<StepperRef>(null);

  const next = useEventCallback(() => stepperRef.current?.next());
  const previous = useEventCallback(() => stepperRef.current?.previous());

  const create = useMutation(createCompany);

  const steps = useMemo(
    () => [
      { component: <CompanyInfo />, title: "Informações da empresa" },
      { component: <Resources />, title: "Recursos da empresa" },
      { component: <Project />, title: "Informações do projeto I" },
    ],
    []
  );
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const onChangeStep = useEventCallback((step: number) => {
    setHasPrevious(step > 1);
    setHasNext(step < steps.length);
  });

  const payload = useCompanyFormData();

  const onSubmit = useEventCallback((e: SyntheticEvent) => {
    e.preventDefault();
    create.mutate(payload);
  });

  return (
    <div className="flex items-center h-screen p-8 mx-16">
      <div className="w-full grid grid-rows-1 grid-cols-[auto_1fr] gap-4 h-[70vh] relative z-10">
        <form className="max-w-sm" onSubmit={onSubmit}>
          <Text variant="h3" className="font-semibold text-center mb-8">
            {t("Title")}
          </Text>
          <Stepper ref={stepperRef} steps={steps} onChange={onChangeStep} />
          <div className="flex justify-between align-center mt-8">
            <Button
              onClick={previous}
              variant="outlined"
              disabled={!hasPrevious}
              type="button"
            >
              {t("Controls.Back")}
            </Button>
            {hasNext ? (
              <Button
                onClick={next}
                disabled={!hasNext}
                key="action-next"
                type="button"
              >
                {t("Controls.Next")}
              </Button>
            ) : (
              <Button
                type="submit"
                key="action-next"
                loading={create.isLoading}
              >
                {t("Controls.Submit")}
              </Button>
            )}
          </div>
        </form>
        <div className="w-full flex flex-col items-center">
          <img src="assets/logo.jpeg" className="w-96" />
        </div>
      </div>
      <img
        src="assets/waves.svg"
        className="absolute left-0 bottom-[-6rem] z-0"
      />
    </div>
  );
}

export default RegisterCompany;
