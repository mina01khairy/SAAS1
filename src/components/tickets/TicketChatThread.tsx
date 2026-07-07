import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@/components/ui/Avatar";
import { TicketMessage } from "@/lib/types";
import clsx from "@/lib/clsx";

export function TicketChatThread({ messages }: { messages: TicketMessage[] }) {
  return (
    <div className="space-y-6">
      {messages.map((message) => {
        if (message.isInternal) {
          return (
            <div key={message.id} className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-700 text-xs font-bold">
                <FontAwesomeIcon icon={faFileLines} className="text-xs" />
              </div>
              <div className="max-w-[85%] sm:max-w-[75%]">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-label-sm text-label-sm text-amber-700">
                    {message.author}
                  </span>
                  <span className="text-[11px] text-outline">
                    {message.timestamp}
                  </span>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl rounded-tl-sm px-4 py-3">
                  <p className="font-body-sm text-body-sm text-amber-900">
                    {message.body}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        const isAgent = message.isAgent;

        return (
          <div
            key={message.id}
            className={clsx("flex gap-3", isAgent && "flex-row-reverse")}
          >
            <Avatar name={message.author} size="sm" />
            <div className={clsx("max-w-[85%] sm:max-w-[75%]", isAgent && "items-end flex flex-col")}>
              <div
                className={clsx(
                  "flex items-baseline gap-2 mb-1",
                  isAgent && "flex-row-reverse"
                )}
              >
                <span className="font-label-sm text-label-sm text-on-surface">
                  {message.author}
                </span>
                <span className="text-[11px] text-outline">
                  {message.timestamp}
                </span>
              </div>
              <div
                className={clsx(
                  "rounded-xl px-4 py-3",
                  isAgent
                    ? "bg-primary text-on-primary rounded-tr-sm"
                    : "bg-surface-container-low text-on-surface rounded-tl-sm"
                )}
              >
                <p
                  className={clsx(
                    "font-body-sm text-body-sm",
                    isAgent ? "text-on-primary" : "text-on-surface"
                  )}
                >
                  {message.body}
                </p>
              </div>
              {message.attachment && (
                <div
                  className={clsx(
                    "mt-2 flex items-center gap-2 px-3 py-2 rounded-lg border border-outline-variant/30 bg-surface-container-lowest",
                    isAgent && "self-end"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    className="text-outline text-xs"
                  />
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface">
                      {message.attachment.name}
                    </p>
                    <p className="text-[11px] text-on-surface-variant">
                      {message.attachment.meta}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
