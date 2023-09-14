import {
  deleteUserProfileImage,
  updateUserProfileImage,
  uploadProfileImg,
} from '@api/supabaseAuth';

export const updateUserAvatar = async (
  file: File,
  email: string,
  userId: string,
) => {
  const filePath = await uploadProfileImg(file, email);

  if (typeof filePath !== 'string') {
    throw new Error('프로필 사진 업데이트 오류');
  }

  const res = await updateUserProfileImage(filePath, userId);
  if (res !== null && res !== undefined) {
    const {
      id,
      email,
      user_metadata: { profileImg, name, nickname },
    } = res;
    return {
      id,
      email: email as string,
      nickname: nickname ?? name,
      profileImg,
    };
  }
};

export const removeUserAvartar = async (userId: string) => {
  const res = await deleteUserProfileImage(userId);
  if (res !== null && res !== undefined) {
    const {
      id,
      email,
      user_metadata: { name, nickname },
    } = res;

    return {
      id,
      email: email as string,
      nickname: nickname ?? name,
      profileImg: null,
    };
  }
};
