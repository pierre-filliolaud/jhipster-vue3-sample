import { defineStore } from 'pinia';

export interface AccountStateStorable {
  logon: boolean;
  userIdentity: null | any;
  authenticated: boolean;
  profilesLoaded: boolean;
  ribbonOnProfiles: string;
  activeProfiles: string;
}

export const defaultAccountState: AccountStateStorable = {
  logon: null,
  userIdentity: null,
  authenticated: false,
  profilesLoaded: false,
  ribbonOnProfiles: '',
  activeProfiles: '',
};

export const useAccountStore = defineStore('main', {
  state: (): AccountStateStorable => ({ ...defaultAccountState }),
  getters: {
    account: state => state.userIdentity,
  },
  actions: {
    authenticate(promise) {
      this.logon = promise;
    },
    setAuthentication(identity) {
      this.userIdentity = identity;
      this.authenticated = true;
      this.logon = null;
    },
    logout() {
      this.userIdentity = null;
      this.authenticated = false;
      this.logon = null;
    },
    setProfilesLoaded() {
      this.profilesLoaded = true;
    },
    setActiveProfiles(profile) {
      this.activeProfiles = profile;
    },
    setRibbonOnProfiles(ribbon) {
      this.ribbonOnProfiles = ribbon;
    },
  },
});
