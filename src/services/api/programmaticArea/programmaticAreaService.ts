import api from '../apiService/apiService';
import { useRepo } from 'pinia-orm';
import ProgrammaticArea from 'src/stores/model/programmaticArea/ProgrammaticArea';
import useProgrammaticArea from 'src/composables/programmaticArea/programmaticAreaMethods';

const repo = useRepo(ProgrammaticArea);
const { createProgrammaticAreaFromDTO } = useProgrammaticArea();

export default {
  async getAll(searchParam: string) {
    return await api()
      .get(`/programmaticareas/getAll?${new URLSearchParams(searchParam).toString()}`)
      .then((resp) => {
        this.generateAndSaveEntityFromDTO(resp.data?.content);
        return resp;
      })
      .catch((error) => {
        console.error(error);
        console.error('Error', error.message);
      });
  },
  generateAndSaveEntityFromDTO(dtoList: any) {
    dtoList.forEach((dto: any) => {
      const entity = createProgrammaticAreaFromDTO(dto);
      repo.save(entity);
    });
  },
  deleteAllFromStorage() {
    repo.flush();
  },
  piniaGetAll() {
    return repo.query().orderBy('description', 'asc').get();
  },
  getByName(name: string) {
    return repo
      .query()
      .where('name', name)
      .orderBy('description', 'asc')
      .first();
  },
  getById(id: string) {
    return repo
      .query()
      .with('program')
      .where('id', id)
      .orderBy('description', 'asc')
      .first();
  },
  getProgrammaticAreasByProgramaId(programId: number) {
    return repo.query().with('program').where('program_id', programId).get();
  },
  async saveProgrammaticArea(programmaticarea: any) {
    return await api()
      .post('/programmaticareas', programmaticarea)
      .then((resp) => {
        repo.save(createProgrammaticAreaFromDTO(resp.data));
        return resp;
      })
      .catch((error) => {
        console.error('Error', error.message);
      });
  },
  async deleteProgrammaticArea(programmaticareaId: number) {
    try {
      const resp = await api().patch(`/programmaticareas/${programmaticareaId}`);
      await api().delete(`/programmaticareas/${programmaticareaId}`);
      repo.save(createProgrammaticAreaFromDTO(resp.data));
      repo.delete(programmaticareaId);
      return resp;
    } catch (error: any) {
      console.error('Error', error.message);
      // You might want to re-throw the error or handle it differently here
      throw error;
    }
  },
  async updateProgrammaticArea(program: any) {
    return await api()
      .patch('/programmaticareas', program)
      .then((resp) => {
        repo.save(createProgrammaticAreaFromDTO(resp.data));
        return resp;
      })
      .catch((error) => {
        console.error('Error', error.message);
      });
  },
};
