import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
// import { submitQuoteRequest } from "@/lib/supabase-queries";

export const QuoteForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    company_website: "",
    country: "",
    service_type: "",
    budget_range: "",
    timeline: "",
    project_description: "",
    has_existing_design: "no",
    preferred_contact_method: "email",
    features: [] as string[],
    how_did_you_find_us: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter((f) => f !== feature),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.phone || !formData.service_type || !formData.project_description) {
      toast.error(t("quoteForm.validation.required"));
      return;
    }

    setIsSubmitting(true);
    try {
      // Uncomment when Supabase is connected:
      // await submitQuoteRequest(formData);
      console.log("Quote form submitted:", formData);
      toast.success(t("quoteForm.success"));
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        company_website: "",
        country: "",
        service_type: "",
        budget_range: "",
        timeline: "",
        project_description: "",
        has_existing_design: "no",
        preferred_contact_method: "email",
        features: [],
        how_did_you_find_us: "",
      });
    } catch {
      toast.error(t("quoteForm.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const featureOptions = [
    "authentication",
    "payments",
    "dashboard",
    "cms",
    "api_integration",
    "multilingual",
    "analytics",
    "chat",
  ];

  return (
    <section id="quote" className="section-padding bg-secondary/30">
      <div ref={ref} className="container-custom">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-4">
            ● {t("quoteForm.subtitle")}
          </p>
          <h2 className="section-main-header mb-4">
            {t("quoteForm.titleHighlight")}{" "}
            <span className="text-accent">{t("quoteForm.titleAccent")}</span>
          </h2>
          <p className="section-paragraph max-w-2xl mx-auto">
            {t("quoteForm.description")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border ${
            isVisible ? "animate-fade-up delay-200" : "opacity-0"
          }`}
        >
          {/* Section 1: Personal Info */}
          <h3 className="font-display text-lg tracking-wide mb-6 text-foreground">
            {t("quoteForm.sections.personal")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-2">
              <Label htmlFor="full_name">{t("quoteForm.fields.fullName")} *</Label>
              <Input
                id="full_name"
                value={formData.full_name}
                onChange={(e) => handleChange("full_name", e.target.value)}
                placeholder={t("quoteForm.placeholders.fullName")}
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("quoteForm.fields.email")} *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t("quoteForm.placeholders.email")}
                maxLength={255}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t("quoteForm.fields.phone")} *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder={t("quoteForm.placeholders.phone")}
                maxLength={20}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">{t("quoteForm.fields.country")}</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                placeholder={t("quoteForm.placeholders.country")}
                maxLength={100}
              />
            </div>
          </div>

          {/* Section 2: Company Info */}
          <h3 className="font-display text-lg tracking-wide mb-6 text-foreground">
            {t("quoteForm.sections.company")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-2">
              <Label htmlFor="company_name">{t("quoteForm.fields.companyName")}</Label>
              <Input
                id="company_name"
                value={formData.company_name}
                onChange={(e) => handleChange("company_name", e.target.value)}
                placeholder={t("quoteForm.placeholders.companyName")}
                maxLength={200}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company_website">{t("quoteForm.fields.companyWebsite")}</Label>
              <Input
                id="company_website"
                type="url"
                value={formData.company_website}
                onChange={(e) => handleChange("company_website", e.target.value)}
                placeholder={t("quoteForm.placeholders.companyWebsite")}
                maxLength={500}
              />
            </div>
          </div>

          {/* Section 3: Project Details */}
          <h3 className="font-display text-lg tracking-wide mb-6 text-foreground">
            {t("quoteForm.sections.project")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label>{t("quoteForm.fields.serviceType")} *</Label>
              <Select
                value={formData.service_type}
                onValueChange={(v) => handleChange("service_type", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("quoteForm.placeholders.serviceType")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web_development">{t("quoteForm.serviceOptions.webDev")}</SelectItem>
                  <SelectItem value="mobile_development">{t("quoteForm.serviceOptions.mobileDev")}</SelectItem>
                  <SelectItem value="desktop_development">{t("quoteForm.serviceOptions.desktopDev")}</SelectItem>
                  <SelectItem value="automation">{t("quoteForm.serviceOptions.automation")}</SelectItem>
                  <SelectItem value="ui_ux_design">{t("quoteForm.serviceOptions.uiux")}</SelectItem>
                  <SelectItem value="multiple">{t("quoteForm.serviceOptions.multiple")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t("quoteForm.fields.budgetRange")}</Label>
              <Select
                value={formData.budget_range}
                onValueChange={(v) => handleChange("budget_range", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("quoteForm.placeholders.budgetRange")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under_50k">{t("quoteForm.budgetOptions.under50k")}</SelectItem>
                  <SelectItem value="50k_100k">{t("quoteForm.budgetOptions.50k100k")}</SelectItem>
                  <SelectItem value="100k_200k">{t("quoteForm.budgetOptions.100k200k")}</SelectItem>
                  <SelectItem value="200k_500k">{t("quoteForm.budgetOptions.200k500k")}</SelectItem>
                  <SelectItem value="over_500k">{t("quoteForm.budgetOptions.over500k")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label>{t("quoteForm.fields.timeline")}</Label>
              <Select
                value={formData.timeline}
                onValueChange={(v) => handleChange("timeline", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("quoteForm.placeholders.timeline")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">{t("quoteForm.timelineOptions.asap")}</SelectItem>
                  <SelectItem value="1_month">{t("quoteForm.timelineOptions.1month")}</SelectItem>
                  <SelectItem value="1_3_months">{t("quoteForm.timelineOptions.1_3months")}</SelectItem>
                  <SelectItem value="3_6_months">{t("quoteForm.timelineOptions.3_6months")}</SelectItem>
                  <SelectItem value="flexible">{t("quoteForm.timelineOptions.flexible")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t("quoteForm.fields.hasDesign")}</Label>
              <RadioGroup
                value={formData.has_existing_design}
                onValueChange={(v) => handleChange("has_existing_design", v)}
                className="flex gap-6 pt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="design_yes" />
                  <Label htmlFor="design_yes" className="font-normal">{t("quoteForm.yes")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="design_no" />
                  <Label htmlFor="design_no" className="font-normal">{t("quoteForm.no")}</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <Label htmlFor="project_description">{t("quoteForm.fields.projectDescription")} *</Label>
            <Textarea
              id="project_description"
              value={formData.project_description}
              onChange={(e) => handleChange("project_description", e.target.value)}
              placeholder={t("quoteForm.placeholders.projectDescription")}
              rows={5}
              maxLength={2000}
              required
            />
          </div>

          {/* Features */}
          <div className="mb-10">
            <Label className="mb-3 block">{t("quoteForm.fields.features")}</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {featureOptions.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={`feature_${feature}`}
                    checked={formData.features.includes(feature)}
                    onCheckedChange={(checked) =>
                      handleFeatureToggle(feature, checked as boolean)
                    }
                  />
                  <Label htmlFor={`feature_${feature}`} className="font-normal text-sm">
                    {t(`quoteForm.featureOptions.${feature}`)}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Preferences */}
          <h3 className="font-display text-lg tracking-wide mb-6 text-foreground">
            {t("quoteForm.sections.preferences")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-2">
              <Label>{t("quoteForm.fields.contactMethod")}</Label>
              <RadioGroup
                value={formData.preferred_contact_method}
                onValueChange={(v) => handleChange("preferred_contact_method", v)}
                className="flex gap-4 pt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="contact_email" />
                  <Label htmlFor="contact_email" className="font-normal">{t("quoteForm.contactOptions.email")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="contact_phone" />
                  <Label htmlFor="contact_phone" className="font-normal">{t("quoteForm.contactOptions.phone")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="whatsapp" id="contact_whatsapp" />
                  <Label htmlFor="contact_whatsapp" className="font-normal">WhatsApp</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>{t("quoteForm.fields.howFoundUs")}</Label>
              <Select
                value={formData.how_did_you_find_us}
                onValueChange={(v) => handleChange("how_did_you_find_us", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("quoteForm.placeholders.howFoundUs")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">{t("quoteForm.sourceOptions.google")}</SelectItem>
                  <SelectItem value="social_media">{t("quoteForm.sourceOptions.social")}</SelectItem>
                  <SelectItem value="referral">{t("quoteForm.sourceOptions.referral")}</SelectItem>
                  <SelectItem value="other">{t("quoteForm.sourceOptions.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("quoteForm.submitting") : t("quoteForm.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
