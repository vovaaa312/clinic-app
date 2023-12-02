import axios, { AxiosResponse } from "axios";
import {PacientAdresa} from "../pacientAdresa/PacientAdresa.tsx";

const BASE_URL = "http://localhost:8080/api/pacienti-data";

class PacientService {
    getAllPacienti(): Promise<AxiosResponse<PacientAdresa[]>> {
        return axios.get<PacientAdresa[]>(BASE_URL);
    }

    createPacient(pacient: PacientAdresa): Promise<AxiosResponse<PacientAdresa>> {
        return axios.post<PacientAdresa>(BASE_URL, pacient);
    }

    getPacientById(pacientId: number): Promise<AxiosResponse<PacientAdresa>> {
        return axios.get<PacientAdresa>(`${BASE_URL}/${pacientId}`);
    }

    updatePacient(
        pacientId: number,
        pacient: PacientAdresa
    ): Promise<AxiosResponse<PacientAdresa>> {
        return axios.put<PacientAdresa>(`${BASE_URL}/${pacientId}`, pacient);
    }

    deletePacient(pacientId: number): Promise<AxiosResponse<void>> {
        return axios.delete<void>(`${BASE_URL}/${pacientId}`);
    }
}

export default new PacientService();