import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HommageMessage, getPublicHommages, submitHommage } from "@/lib/hommageApi";

const NAME_LIMIT = 50;
const MESSAGE_LIMIT = 300;

const HommageSection = () => {
  const [messages, setMessages] = useState<HommageMessage[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    getPublicHommages()
      .then((data) => setMessages(data.messages))
      .catch(() => setMessages([]));
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");

    if (!name.trim() || !message.trim() || !consent) {
      setStatus("error");
      setFeedback("Please enter your name, message, and consent before submitting.");
      return;
    }

    if (name.trim().length > NAME_LIMIT || message.trim().length > MESSAGE_LIMIT) {
      setStatus("error");
      setFeedback("Please keep your name and message within the character limits.");
      return;
    }

    setStatus("loading");
    try {
      const response = await submitHommage({ name, message, consent, website });
      setStatus("success");
      setFeedback(response.message);
      setName("");
      setMessage("");
      setConsent(false);
      setWebsite("");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to submit your message right now.");
    }
  };

  return (
    <section id="hommage" className="py-20 px-4 bg-gradient-spiritual">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Hommage / श्रद्धांजलि संदेश"
          subtitle="Share a short devotional remembrance. Approved messages remain visible for 7 days."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gold/40 bg-card/80 p-6 shadow-gold backdrop-blur-sm"
          >
            <div className="mb-5 flex items-center gap-3 text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">Submit your homage</h3>
                <p className="text-sm text-muted-foreground">New messages are reviewed before they appear publicly.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="hommage-name">Name</Label>
                <Input
                  id="hommage-name"
                  value={name}
                  onChange={(event) => setName(event.target.value.slice(0, NAME_LIMIT))}
                  maxLength={NAME_LIMIT}
                  required
                  placeholder="Your name"
                />
                <p className="text-right text-xs text-muted-foreground">{name.length}/{NAME_LIMIT}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hommage-message">Hommage message</Label>
                <Textarea
                  id="hommage-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value.slice(0, MESSAGE_LIMIT))}
                  maxLength={MESSAGE_LIMIT}
                  required
                  rows={4}
                  className="max-h-32 resize-none leading-6"
                  placeholder="Write a short remembrance..."
                />
                <p className="text-right text-xs text-muted-foreground">{message.length}/{MESSAGE_LIMIT}</p>
              </div>

              <div className="hidden" aria-hidden="true">
                <Label htmlFor="hommage-website">Website</Label>
                <Input
                  id="hommage-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-gold/30 bg-background/50 p-3">
                <Checkbox id="hommage-consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} />
                <Label htmlFor="hommage-consent" className="text-sm leading-5">
                  I agree that my name and message may be displayed publicly on this website for 7 days.
                </Label>
              </div>

              <Button type="submit" disabled={status === "loading"} className="w-full">
                {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                Submit
              </Button>

              {feedback && (
                <p
                  className={`rounded-lg p-3 text-sm ${
                    status === "success"
                      ? "border border-green-700/20 bg-green-700/10 text-green-900"
                      : "border border-destructive/20 bg-destructive/10 text-destructive"
                  }`}
                  role="status"
                >
                  {feedback}
                </p>
              )}
            </div>
          </motion.form>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            {messages.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gold/50 bg-card/60 p-6 text-center shadow-gold sm:col-span-2">
                <p className="font-display text-2xl text-foreground">Approved messages will appear here.</p>
                <p className="mt-2 text-sm text-muted-foreground">Each approved homage is shown newest first for 7 days.</p>
              </div>
            ) : (
              messages.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.45 }}
                  className="rounded-2xl border border-gold/40 bg-card/80 p-5 shadow-gold"
                >
                  <p className="line-clamp-4 whitespace-pre-line text-sm leading-6 text-foreground">“{item.message}”</p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-gold/20 pt-3">
                    <p className="truncate font-display text-lg font-semibold text-primary">{item.name}</p>
                    <time className="shrink-0 text-xs text-muted-foreground" dateTime={item.created_at}>
                      {new Date(`${item.created_at}Z`).toLocaleDateString()}
                    </time>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HommageSection;
