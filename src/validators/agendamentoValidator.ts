import { agendamento } from "../models/agendamento";

export function validarAgendamento(
  agendamento: agendamento | any
): { field: string; message: string }[] | null {
  const errors = [];

  const { medico, paciente, data_horario } = agendamento;

  if (!medico || typeof medico !== "string") {
    errors.push({
      field: "medico",
      message: "O nome do médico é obrigatório.",
    });
  }
  if (!paciente || typeof paciente !== "string") {
    errors.push({
      field: "paciente",
      message: "O nome do paciente é obrigatório.",
    });
  }

  const datetimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

  if (!datetimeRegex.test(data_horario)) {
    errors.push({
      field: "data_horario",
      message:
        "O formato da data e horário deve ser no formato YYYY-MM-DD HH:MM.",
    });
  } else {
    const dateFormat = data_horario.replace(" ", "T");
    if (
      isNaN(new Date(dateFormat).getTime()) ||
      new Date(dateFormat) < new Date()
    ) {
      errors.push({
        field: "data_horario",
        message: "A data e/ou horário estão inválidos.",
      });
    }
  }

  return errors.length > 0 ? errors : null;
}
