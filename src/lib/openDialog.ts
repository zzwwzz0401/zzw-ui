import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'
export const openDialog = (option) => {
    const { title, content, Affirm, Cancel } = option
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                'onUpdate:visible': (newval) => {
                    if (newval === false) {
                        app.unmount(div);
                        div.remove();
                    }
                },
                Affirm, Cancel
            }, {
                title, content
            })
        }
    })
    app.mount(div)
} 