import { TaskStatus } from "@prisma/client";

export default function validateStatus(status: TaskStatus): TaskStatus {
    const validStatus = [TaskStatus.LOW, TaskStatus.MEDIUM, TaskStatus.HIGH];

    if(status) {
        if(!validStatus.includes(status)) {
            throw new Error('Status cannot be valid')
        }
        return status
    }
}