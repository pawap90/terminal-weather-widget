import { emitKeypressEvents } from 'node:readline';

export class Controller {
    private commads: { key: string; command: () => void }[] = [];

    on(key: string, command: () => void) {
        this.commads.push({ key, command });
        return this;
    }

    build() {
        emitKeypressEvents(process.stdin);

        process.stdin.setRawMode(true);

        process.stdin.on('keypress', (chunk, key) => {
            this.commads.forEach((command) => {
                if (command.key == key.name) {
                    command.command();
                }
            });  
        });
    }
}