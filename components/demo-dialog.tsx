"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoDialog({ open, onOpenChange }: DemoDialogProps) {
  const [adminName, setAdminName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [workEmail, setWorkEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [hospitalName, setHospitalName] = React.useState("");
  const [privacyChecked, setPrivacyChecked] = React.useState(false);

  // Reset form when dialog is closed or opened
  React.useEffect(() => {
    if (open) {
      setAdminName("");
      setMobileNumber("");
      setWorkEmail("");
      setCity("");
      setHospitalName("");
      setPrivacyChecked(false);
    }
  }, [open]);

  const capitalizeFirst = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleAdminNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    val = capitalizeFirst(val);
    setAdminName(val);
  };

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 10) {
      val = val.slice(0, 10);
    }
    setMobileNumber(val);
  };

  const handleWorkEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\s/g, "").toLowerCase();
    setWorkEmail(val);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = capitalizeFirst(e.target.value);
    setCity(val);
  };

  const handleHospitalNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val.length > 0 && /[a-zA-Z]/.test(val[0])) {
      val = val.charAt(0).toUpperCase() + val.slice(1);
    }
    setHospitalName(val);
  };

  const isFormValid =
    adminName.trim() !== "" &&
    mobileNumber.length === 10 &&
    workEmail.trim() !== "" &&
    city.trim() !== "" &&
    hospitalName.trim() !== "" &&
    privacyChecked;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    alert("Thank you! Your demo request has been received.");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[550px] rounded-2xl">
        <DialogHeader className="mb-8">
          <DialogTitle className="text-[28px] font-bold text-[#0b1724]">Book A Free Demo</DialogTitle>
          <DialogDescription className="mt-3 text-[#657887]">
            See DrWare360 on your own workflows. Our team replies within one business day.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2.5">
              <Label htmlFor="admin-name">Admin Name *</Label>
              <Input
                id="admin-name"
                name="admin-name"
                required
                placeholder="Admin Name"
                value={adminName}
                onChange={handleAdminNameChange}
              />
            </div>
            
            <div className="space-y-2.5">
              <Label htmlFor="mobile-number">Mobile number *</Label>
              <Input
                id="mobile-number"
                name="mobile-number"
                type="tel"
                required
                placeholder="9876543210"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              />
            </div>
            
            <div className="space-y-2.5">
              <Label htmlFor="work-email">Work email *</Label>
              <Input
                id="work-email"
                name="work-email"
                type="email"
                required
                placeholder="you@hospital.com"
                value={workEmail}
                onChange={handleWorkEmailChange}
              />
            </div>

            <div className="space-y-2.5">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="city"
                required
                placeholder="Your City"
                value={city}
                onChange={handleCityChange}
              />
            </div>

            <div className="space-y-2.5 sm:col-span-2">
              <Label htmlFor="hospital-name">Hospital Name *</Label>
              <Input
                id="hospital-name"
                name="hospital-name"
                required
                placeholder="Your Hospital Name"
                value={hospitalName}
                onChange={handleHospitalNameChange}
              />
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3">
            <input
              type="checkbox"
              id="privacy"
              required
              checked={privacyChecked}
              onChange={(e) => setPrivacyChecked(e.target.checked)}
              className="mt-0.5 h-[18px] w-[18px] rounded-[5px] border-[#dce6ed] bg-white text-[var(--blue)] focus:ring-[var(--blue)] shadow-sm"
            />
            <Label htmlFor="privacy" className="text-[13px] font-[650] text-[#748693] leading-relaxed">
              I have read and agree to the <a href="#" className="text-[var(--blue)] hover:underline">Privacy Policy</a>.
            </Label>
          </div>

          <div className="pt-5 flex flex-col items-center">
            <Button type="submit" disabled={!isFormValid} className="w-full">
              Request my demo
            </Button>
            <p className="text-[12px] font-[500] text-[#9aabb6] mt-5 tracking-wide">
              No spam. Your details are used only to arrange the demo.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
