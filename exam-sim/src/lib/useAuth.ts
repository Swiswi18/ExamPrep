import { ref } from 'vue'
import { supabase } from './supabase'
import type { Session, User } from '@supabase/supabase-js'

export const user = ref<User | null>(null)

// Initial load
supabase.auth.getUser().then(({ data }) => {
  user.value = data?.user ?? null
})

// Auth change listener
supabase.auth.onAuthStateChange((_event, session: Session | null) => {
  user.value = session?.user ?? null
})

// Signup function
export const signUp = async (email: string, password: string): Promise<Error | null> => {
  const { error } = await supabase.auth.signUp({ email, password })
  return error
}

// Login function
export const signIn = async (email: string, password: string): Promise<Error | null> => {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  return error
}

// Logout function
export const signOut = async (): Promise<Error | null> => {
  const { error } = await supabase.auth.signOut()
  return error
}
