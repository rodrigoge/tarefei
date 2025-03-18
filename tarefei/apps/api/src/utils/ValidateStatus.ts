import { TaskStatus } from "@prisma/client";

export default function validateStatus(status: string): TaskStatus {
    const validStatus = [TaskStatus.LOW, TaskStatus.MEDIUM, TaskStatus.HIGH];

    if (!validStatus.includes(status as TaskStatus)) {
        throw new Error('Status is not valid');
    }

    return status as TaskStatus;
}
