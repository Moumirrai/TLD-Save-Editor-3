import { readFile, writeFile } from 'fs/promises';
import { reactive } from 'vue';
import tldParser from './tldSave/tldParser';
import parser from './tldSave/tldParser';

interface GameSave {
  file: string;
  data: ReturnType<typeof parser['parse']>;
}

const store = {
  currentSave: undefined as undefined | GameSave,

  get global() {
    return this.currentSave?.data.m_Dict.global;
  },

  async loadSave(file: string) {
    const buf = await readFile(file);
    const saveData = tldParser.parse(buf);
    this.currentSave = {
      file,
      data: saveData,
    };
  },
  async saveCurrent() {
    if (!this.currentSave) return;
    const buf = tldParser.serialize(this.currentSave.data);
    await writeFile(this.currentSave.file, buf);
  },
};

export default reactive(store);
