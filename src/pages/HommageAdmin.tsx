import { FormEvent, useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2, Trash2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HommageMessage, getAdminHommages, moderateHommage } from "@/lib/hommageApi";

const filters = ["pending", "approved", "rejected", "all"] as const;
type Filter = (typeof filters)[number];

const HommageAdmin = () => {
  const [password, setPassword] = useState("");
  const [activePassword, setActivePassword] = useState("");
  const [filter, setFilter] = useState<Filter>("pending");
  const [messages, setMessages] = useState<HommageMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const isSignedIn = activePassword.length > 0;

  const loadMessages = async (nextFilter = filter) => {
    if (!activePassword) return;
    setLoading(true);
    setFeedback("");
    try {
      const data = await getAdminHommages(activePassword, nextFilter);
      setMessages(data.messages);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Unable to load messages.");
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, activePassword]);

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActivePassword(password);
  };

  const handleModerate = async (id: number, action: "approve" | "reject" | "delete") => {
    setLoading(true);
    setFeedback("");
    try {
      await moderateHommage(activePassword, id, action);
      setFeedback(`Message ${action === "delete" ? "deleted" : `${action}d`}.`);
      await loadMessages(filter);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Moderation action failed.");
    } finally {
      setLoading(false);
    }
  };

  const heading = useMemo(() => filter.charAt(0).toUpperCase() + filter.slice(1), [filter]);

  return (
    <main className="min-h-screen bg-gradient-spiritual px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-2xl border border-gold/40 bg-card/80 p-6 shadow-gold">
          <a href="/" className="text-sm text-primary underline-offset-4 hover:underline">
            ← Back to website
          </a>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground">Hommage moderation</h1>
          <p className="mt-2 text-muted-foreground">
            Approve, reject, or delete visitor-submitted Hommage / श्रद्धांजलि संदेश entries. Admin password is sent only to the protected backend API.
          </p>
        </div>

        {!isSignedIn ? (
          <form onSubmit={handleSignIn} className="rounded-2xl border border-gold/40 bg-card/80 p-6 shadow-gold">
            <div className="space-y-2">
              <Label htmlFor="admin-password">Admin password</Label>
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" className="mt-4">Open moderation queue</Button>
          </form>
        ) : (
          <section className="rounded-2xl border border-gold/40 bg-card/80 p-6 shadow-gold">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground">{heading} messages</h2>
                <p className="text-sm text-muted-foreground">Showing up to 200 newest records.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((item) => (
                  <Button
                    key={item}
                    type="button"
                    variant={filter === item ? "default" : "outline"}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            {feedback && <p className="mb-4 rounded-lg border border-gold/30 bg-background/70 p-3 text-sm">{feedback}</p>}
            {loading && <p className="mb-4 flex items-center gap-2 text-sm"><Loader2 className="h-4 w-4 animate-spin" /> Loading...</p>}

            <div className="space-y-4">
              {messages.length === 0 && !loading ? (
                <p className="rounded-xl border border-dashed border-gold/40 p-5 text-center text-muted-foreground">No messages found.</p>
              ) : (
                messages.map((item) => (
                  <article key={item.id} className="rounded-xl border border-gold/30 bg-background/60 p-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="font-display text-xl font-semibold text-primary">{item.name}</p>
                        <time className="text-xs text-muted-foreground" dateTime={item.created_at}>
                          {new Date(`${item.created_at}Z`).toLocaleString()}
                        </time>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" type="button" onClick={() => handleModerate(item.id, "approve")}>
                          <CheckCircle2 className="mr-2 h-4 w-4" /> Approve
                        </Button>
                        <Button size="sm" type="button" variant="outline" onClick={() => handleModerate(item.id, "reject")}>
                          <XCircle className="mr-2 h-4 w-4" /> Reject
                        </Button>
                        <Button size="sm" type="button" variant="destructive" onClick={() => handleModerate(item.id, "delete")}>
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </Button>
                      </div>
                    </div>
                    <p className="mt-3 whitespace-pre-line rounded-lg bg-card/70 p-3 text-sm leading-6">{item.message}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Status: {item.rejected ? "Rejected" : item.approved ? "Approved" : "Pending"}
                    </p>
                  </article>
                ))
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default HommageAdmin;
