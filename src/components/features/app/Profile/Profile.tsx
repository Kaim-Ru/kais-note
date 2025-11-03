import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';
import { withBasePath } from '@/lib/getBasePath';

export const Profile = () => (
  <div className="items-center max-w-full gap-5 p-6 overflow-x-hidden select-none vstack bg-primary-1">
    <div className="items-center gap-2 vstack">
      <div className="relative w-28 h-28">
        <img
          className="object-cover rounded-full absolute inset-0 w-full h-full"
          alt="avatar"
          src={withBasePath('/assets/author.jpeg')}
        />
      </div>
      <h1 className="text-2xl font-semibold text-primary-1">Next.js</h1>
    </div>

    <p className="text-primary-1">
      Modern JavaScript Framework: hybrid static & server rendering, TypeScript
      support, smart bundling, route pre-fetching...
    </p>

    <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
);
