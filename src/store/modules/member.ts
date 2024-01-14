import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>()

    // 设置会员信息
    const setProfile = (val: any) => {
      profile.value = val
    }
    // 清理会员信息
    const clearProfile = () => {
      profile.value = undefined
    }

    return { profile, setProfile, clearProfile }
  },
  {
    persist: true,
  },
)
