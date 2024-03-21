export function validateHex(value: string) {
    if (value.length === 7) {
        const reg = /^#([0-9a-f]{6})/;
        if (reg.test(value)) {
            const rgb = parseInt(value.slice(1, 3), 16).toString() +
                        parseInt(value.slice(3, 5), 16).toString() +
                        parseInt((value[5] + value[6]), 16).toString();
            return rgb
        }
        else {
            return false
        };
    }
    else {
        return false
    }
}