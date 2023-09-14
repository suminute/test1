import { type UserType } from 'types/supabase';
import { create } from 'zustand';

interface InviteUserStoreType {
  oldInvitedUser: UserType[];
  invitedUser: UserType[];
  inviteUser: (data: UserType) => void;
  resetInvitedUser: () => void;
  setUser: (data: UserType[]) => void;
  syncInviteduser: () => void;
}

export const inviteUserStore = create<InviteUserStoreType>((set, get) => ({
  oldInvitedUser: [],
  invitedUser: [],
  inviteUser: (data: UserType) => {
    const oldInvitedUser = get().invitedUser;
    const isExist = oldInvitedUser.find((user) => user.id === data.id);
    if (isExist != null) return;

    set((state) => ({
      invitedUser: [...state.invitedUser, data],
    }));
  },
  resetInvitedUser: () => {
    set(() => ({
      oldInvitedUser: [],
      invitedUser: [],
    }));
  },
  setUser: (data: UserType[]) => {
    set((state) => ({
      oldInvitedUser: state.invitedUser,
      invitedUser: [...data],
    }));
  },
  syncInviteduser: () => {
    set((state) => ({
      oldInvitedUser: state.invitedUser,
    }));
  },
}));

export const sub = inviteUserStore.subscribe((state) => {
  return state.invitedUser;
});
