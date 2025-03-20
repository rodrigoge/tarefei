-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_taskId_fkey";

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
