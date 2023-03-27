import { useTranslation } from "react-i18next";

import { Text, TextArea, Waves } from "@/components/atoms";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/atoms/table";
import TableContainer from "@/components/atoms/table/TableContainer";
import { Selector, SelectorItem } from "@/components/molecules";
import { Header, StartupHeader } from "@/components/organisms";
import { useEventListener } from "@/hooks";
import { useCompanyFormField } from "@/store";

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
    <>
      <StartupHeader />
      <div className="mx-8 mt-12 relative z-10">
        <Text variant="h5" className="font-medium">
          Ponto de partida
        </Text>
        <TableContainer elevation={2} className="my-4" striped>
          <Table className="w-full">
            <TableHead>
              <TableRow>
                <TableCell>Critério</TableCell>
                <TableCell>Objetivo</TableCell>
                <TableCell>Pergunta De Diagnóstico</TableCell>
                <TableCell>Resposta Aberta</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell noWrap>0.1 Tempo</TableCell>
                <TableCell>
                  Compreender a visão dos empeendedores sobre as motivações e
                  desafios para a criação do negócio/solução.
                </TableCell>
                <TableCell>
                  Há quanto tempo vocês estão desenvolvendo esse projeto?
                </TableCell>
                <TableCell>
                  <TextArea />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Waves />
      <Text variant="h1" className="font-semibold mb-8">
        {t("Meta.Title")}
      </Text>
      <Text variant="h3" className="font-semibold mb-8">
        {t("Structure")}
      </Text>
      <div className="grid grid-flow-col auto-cols-max justify-evenly border-red-600 border-4">
        <div>
          <Text variant="h5" className="font-semibold">
            Canvas
          </Text>
        </div>
        <div className="max-w-md">
          <Text>
            Verificar se foi realizada a estruturação das hipóteses do modelo de
            negócios, por meio do Science Business Model, e se as mesmas foram
            validadas junto aos potenciais clientes da solução.
          </Text>
        </div>
        <div className="max-w-md">
          <Text>
            Vocês já estruturam o Canvas com as hipóteses do negócio? Elas já
            foram validadas?
          </Text>
        </div>
        <div className="max-w-md">
          <Selector
            items={grades}
            label={t("Form.Grade")}
            onChange={setSector}
          />
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
    </>
  );
}

export default UpdateProgress;
