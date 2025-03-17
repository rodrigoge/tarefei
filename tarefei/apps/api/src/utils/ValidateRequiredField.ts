export default function validateRequiredField(name: String, value: Object): Object {
    if(!value) {
        throw new Error(`Field ${name} cannot be null or empty`)
    }
    return value
}