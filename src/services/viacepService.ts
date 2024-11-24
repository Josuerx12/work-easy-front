import { setupHttp } from "./setupHttp";

export class ViaCepService {
  static async findByCep(value: string): Promise<any> {
    const res = await setupHttp(`https://viacep.com.br/ws/${value}/json/`);

    return res.data;
  }
}
