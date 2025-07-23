import { defineStore } from "pinia";
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive } from "vue";

// export const useLoveTalkStore = defineStore("loveTalk", {
//   state: () => ({
//     talkList: JSON.parse(localStorage.getItem('loveTalkList') || '[]')
//   }),
//     actions: {
//         async getATalk() {
//             // 使用axios从API获取情话
//             let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
//             //把请求回来的的字符串包装成一个对象
//             let loveTalk = { id: nanoid(), content };
//             //将获取的情话添加到列表中
//             this.talkList.unshift(loveTalk);

//         }
//     }

// });

export const useLoveTalkStore = defineStore("loveTalk", () => {
  const loveTalk = reactive({
    talkList: JSON.parse(localStorage.getItem('loveTalkList') || '[]')
  });

  async function getATalk() {
    // 使用axios从API获取情话
    let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
    //把请求回来的的字符串包装成一个对象
    let loveTalkItem = { id: nanoid(), content };
    //将获取的情话添加到列表中
    loveTalk.talkList.unshift(loveTalkItem);
  }

  return { ...loveTalk, getATalk };
});
