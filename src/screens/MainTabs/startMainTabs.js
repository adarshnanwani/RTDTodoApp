import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS==='android'?'md-add-circle':"ios-add-circle", 30),
        Icon.getImageSource(Platform.OS==='android'?'md-list':"ios-list", 30),
        Icon.getImageSource(Platform.OS==='android'?'md-menu':"ios-menu", 30)
    ]).then(imgs => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: 'todoapp.AddTodoScreen',
                                    passProps: {
                                        text: 'This is tab 1'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Add Todo Tab',
                                    icon: imgs[0],
                                    testID: 'FIRST_TAB_BAR_BUTTON',
                                    selectedIconColor: 'orange'
                                },
                                topBar: {
                                    title: {
                                        text: "Add New Todo"
                                    },
                                    leftButtons: [
                                        {
                                            icon: imgs[2]
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'todoapp.TodoListScreen',
                                    passProps: {
                                        text: 'This is tab 2'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    icon: imgs[1],
                                    testID: 'SECOND_TAB_BAR_BUTTON',
                                    selectedIconColor: 'orange'
                                },
                                topBar: {
                                    title: {
                                        text: "Todo List"
                                    },
                                    leftButtons: [
                                        {
                                            icon: imgs[2]
                                        }
                                    ]
                                }
                            }
                        }
                    }]
                }
            }
        });
    })

}

export default startMainTabs;