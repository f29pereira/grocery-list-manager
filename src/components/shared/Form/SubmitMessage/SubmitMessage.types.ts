import type { FormMessage } from "@/types/common.types";

/**
 * Props for the SubmitMessage component
 * @property status  - message status
 * @property message - message text
 */
export type SubmitMessageProps = Pick<FormMessage, "status" | "message">;
