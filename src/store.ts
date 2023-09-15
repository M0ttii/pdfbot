import { Conversation, RealDatabase, Tables } from '../types/supabase';
import { atom } from 'jotai'

export const conversationAtom = atom<Conversation[] | null>(null);