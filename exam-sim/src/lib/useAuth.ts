import { ref } from 'vue'
import { supabase } from './supabase'

export const user = ref(null)

supabase.auth.getUser().then(({ data }) => {
  user.value = data?.user ?? null
})

supabase.auth.onAuthStateChange((_event, session) => {
  user.value = session?.user ?? null
})

export const signUp = async (email, password) => {
  const { error } = await supabase.auth.signUp({ email, password })
  return error
}

export const signIn = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  return error
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return error
}
