import { Info } from 'lucide-react';
import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import type { ServiceSlug } from '@/content/service-slugs';
import { getServicesByGroup, serviceGroups } from '@/content/services';

const unsureServiceValue = 'not-sure';

const controlClasses =
  'block w-full rounded-md border border-border-strong bg-background px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:bg-surface sm:text-sm';

interface FieldProps {
  id: string;
  label: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}

function Field({ id, label, optional, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
        {optional && (
          <span className="ml-1 font-normal text-muted-foreground">
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

interface ServiceRequestFormProps {
  defaultService?: ServiceSlug;
}

export function ServiceRequestForm({
  defaultService,
}: ServiceRequestFormProps) {
  return (
    <form aria-describedby="service-request-status">
      <div
        id="service-request-status"
        role="note"
        className="mb-8 flex gap-3 rounded-lg border border-primary/20 bg-accent p-4 text-sm"
      >
        <Info
          aria-hidden="true"
          className="mt-0.5 size-4 shrink-0 text-primary"
        />
        <p>
          <span className="font-semibold">
            Online service requests are not open yet.
          </span>{' '}
          Please book on WhatsApp or by phone for now. This form shows the
          details we’ll ask for, and will accept requests once online booking is
          live.
        </p>
      </div>

      <fieldset disabled className="space-y-10">
        <fieldset className="space-y-5">
          <legend className="mb-4 font-display text-h3 font-semibold">
            Your details
          </legend>
          <Field id="full-name" label="Full name">
            <input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={controlClasses}
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="phone" label="Phone number">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className={controlClasses}
              />
            </Field>
            <Field id="email" label="Email" optional>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={controlClasses}
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="mb-4 font-display text-h3 font-semibold">
            Your vehicle
          </legend>
          <div className="grid gap-5 sm:grid-cols-3">
            <Field id="vehicle-make" label="Make">
              <input
                id="vehicle-make"
                name="vehicleMake"
                type="text"
                required
                className={controlClasses}
              />
            </Field>
            <Field id="vehicle-model" label="Model">
              <input
                id="vehicle-model"
                name="vehicleModel"
                type="text"
                required
                className={controlClasses}
              />
            </Field>
            <Field id="vehicle-year" label="Year" optional>
              <input
                id="vehicle-year"
                name="vehicleYear"
                type="text"
                inputMode="numeric"
                pattern="[0-9]{4}"
                maxLength={4}
                className={controlClasses}
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="mb-4 font-display text-h3 font-semibold">
            Service needed
          </legend>
          <Field id="service" label="Service">
            <select
              id="service"
              name="service"
              required
              defaultValue={defaultService ?? ''}
              className={controlClasses}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value={unsureServiceValue}>
                Not sure – I need a diagnosis
              </option>
              {serviceGroups.map((group) => (
                <optgroup key={group.id} label={group.label}>
                  {getServicesByGroup(group.id).map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </Field>
          <Field id="vehicle-location" label="Where is the vehicle?">
            <input
              id="vehicle-location"
              name="vehicleLocation"
              type="text"
              autoComplete="address-level2"
              placeholder="Town or city, and state"
              required
              className={controlClasses}
            />
          </Field>
          <Field id="problem-description" label="Describe the problem" optional>
            <textarea
              id="problem-description"
              name="problemDescription"
              rows={5}
              placeholder="What have you noticed? When does it happen?"
              className={controlClasses}
            />
          </Field>
        </fieldset>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Submit request
        </Button>
      </fieldset>
    </form>
  );
}
