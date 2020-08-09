import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    {
        id: 1,
        name: 'vava',
        flag: false,
        sub: [
            {
                name: 'vavat0',
                flag: false,
                sub: [{
                    name: 'vavat1',
                    flag: false,
                    sub: [{
                        name: 'vavat2',
                        flag: false,
                        sub: [{
                            name: 'vavat1',
                            flag: false,
                            sub: [{
                                name: 'vavat2',
                                flag: false,
                                sub: [{
                                    name: 'vavat1',
                                    flag: false,
                                    sub: [{
                                        name: 'vavat2',
                                        
                                        
                                      
                                    }]
                                }]
                              
                            }]
                        }]
                      
                    }]
                }]
            },
            {
                name: 'vava01',
                flag: false,
                sub: []
            }]
    },
    {
        name: 'vava1',
        flag: false,
        sub: [{
            name: 'vava11',
            flag: false,
        }]
    },
    {
        name: 'vava2',
        flag: false,
        sub: [{
            name: 'vava21',
            flag: false,
        }]
    }
]
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'HANDLE_MENU':
      return { ...state, data: [...state.data, action.menu] };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
