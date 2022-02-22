import AsyncStorage from '@react-native-async-storage/async-storage';

const key = '@storage_Key';

const store = async value => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const get = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) return null;

    return item;
  } catch (error) {
    console.log(error);
  }
};

const remove = async () => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};

export default {
  store,
  get,
  remove,
};
