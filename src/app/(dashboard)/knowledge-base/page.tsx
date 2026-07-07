import { Metadata } from "next";
import { KnowledgeBaseView } from "@/components/knowledge-base/KnowledgeBaseView";

export const metadata: Metadata = { title: "Knowledge Base — SupportFlow AI" };

export default function KnowledgeBasePage() {
  return <KnowledgeBaseView />;
}
