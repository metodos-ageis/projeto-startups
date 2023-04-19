import { SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import CompanyInfo from "./steps/CompanyInfo";
import Project from "./steps/Project";
import Resources from "./steps/Resources";

import { Text, Button, Fade, Waves } from "@/components/atoms";
import { Stepper } from "@/components/molecules";
import type { StepperRef } from "@/components/molecules";
import { useError, useEventCallback } from "@/hooks";
import { useCreateCompany } from "@/services/company";
import { useCompanyForm, useCompanyFormData } from "@/store";

function RegisterCompany() {
  const { t } = useTranslation(["common", "registerStartup"]);
  const navigate = useNavigate();

  const stepperRef = useRef<StepperRef>(null);

  const create = useCreateCompany(() => {
    navigate(-1);
  });
  const error = useError(create.error, 0);

  const steps = useMemo(
    () => [
      {
        component: <CompanyInfo />,
        title: t("registerStartup:Meta.SectionCompany"),
      },
      {
        component: <Resources />,
        title: t("registerStartup:Meta.SectionResources"),
      },
      {
        component: <Project />,
        title: t("registerStartup:Meta.SectionProject"),
      },
    ],
    []
  );
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const next = useEventCallback(() => stepperRef.current?.next());
  const previous = useEventCallback(() => {
    if (hasPrevious) stepperRef.current?.previous();
    else navigate(-1);
  });

  const onChangeStep = useEventCallback((step: number) => {
    setHasPrevious(step > 1);
    setHasNext(step < steps.length);
  });

  const payload = useCompanyFormData();
  const clear = useCompanyForm((state) => state.clear);

  useEffect(() => {
    return () => clear();
  }, []);

  const onSubmit = useEventCallback((e: SyntheticEvent) => {
    e.preventDefault();
    create.mutate(payload);
  });

  return (
    <div className="flex items-center h-screen p-8 mx-16">
      <div className="w-full grid grid-rows-1 grid-cols-[auto_1fr] gap-4 h-[70vh] relative z-10">
        <form className="max-w-sm" onSubmit={onSubmit}>
          <Text variant="h3" className="font-semibold text-center mb-8">
            {t("registerStartup:Meta.Title")}
          </Text>
          <Stepper ref={stepperRef} steps={steps} onChange={onChangeStep} />
          <div className="flex justify-between items-center mt-8">
            <Button onClick={previous} variant="outlined" type="button">
              {t("registerStartup:Controls.Back")}
            </Button>
            {hasNext ? (
              <Button
                onClick={next}
                disabled={!hasNext}
                key="action-next"
                type="button"
              >
                {t("registerStartup:Controls.Next")}
              </Button>
            ) : (
              <Button
                type="submit"
                key="action-next"
                loading={create.isLoading}
              >
                {t("registerStartup:Controls.Submit")}
              </Button>
            )}
          </div>
          <div className="pt-2 flex items-center justify-center">
            <Fade in={!!create.error}>
              <Text variant="caption" color="error">
                {error}
              </Text>
            </Fade>
          </div>
        </form>
        <div className="w-full flex flex-col items-center">
          <img src="/assets/logo.png" className="w-96" />
        </div>
      </div>
      <Waves size="sm" />
    </div>
  );
}

export default RegisterCompany;
