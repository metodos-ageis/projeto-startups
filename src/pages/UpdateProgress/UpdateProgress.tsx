import { useMutation } from "@tanstack/react-query";
import { SyntheticEvent, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// import CompanyInfo from "./steps/CompanyInfo";
// import Project from "./steps/Project";
// import Resources from "./steps/Resources";

import { Text, Button, TextArea } from "@/components/atoms";
import { Stepper, Selector, SelectorItem } from "@/components/molecules";
import type { StepperRef } from "@/components/molecules";
import { useEventCallback, useEventListener } from "@/hooks";
import { createCompany } from "@/services/company";
import { useCompanyFormData, useCompanyFormField } from "@/store";

function UpdateProgress() {
    const { t } = useTranslation("updateProgress");

    const grades: SelectorItem<string>[] = [
        { id: "one", name: "1" },
        { id: "two", name: "2" },
        { id: "three", name: "3" },
        { id: "four", name: "4" },
        { id: "five", name: "5" },
      ];

    const [, setSector] = useCompanyFormField("sector");

    const [description, setDescription] = useCompanyFormField("description");
    const onChangeDescription = useEventListener(setDescription);

    return (
        <div>
            <Text variant="h1" className="font-semibold mb-8">
                {t("Title")}
            </Text>
            <Text variant="h3" className="font-semibold mb-8">
                {t("Structure")}
            </Text>
            <div className="grid grid-flow-col auto-cols-max justify-evenly border-red-600 border-4">
                <div>
                    <Text variant="h5" className="font-semibold">Canvas</Text>
                </div>
                <div className="max-w-md">
                    <Text>Verificar se foi realizada a estruturação das hipóteses do modelo de negócios, por meio do Science Business Model, e se as mesmas foram validadas junto aos potenciais clientes da solução.</Text>
                </div>
                <div className="max-w-md">
                    <Text>Vocês já estruturam o Canvas com as hipóteses do negócio?  Elas já foram validadas?</Text>
                </div>
                <div className="max-w-md">
                    <Selector items={grades} label={t("Form.Grade")} onChange={setSector} />
                </div>
                <div>
                <TextArea
                    label={t("Form.Observation")}
                    className="h-40"
                    value={description}
                    onChange={onChangeDescription}
                />
                </div>
            </div>
        </div>
    );
}

export default UpdateProgress
