import { CgArrowTopRight } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

type CardProjectProps = {
  img?: string
  link?: string
  name: string
  status?: string
  description?: string
  stack?: string[]
}

const CardProject = ({
  img,
  link,
  name,
  status,
  description,
  stack,
}: CardProjectProps) => {
  return (
    <article className="w-full max-w-[390px] min-h-[310px] overflow-hidden rounded-sm bg-black/30 shadow-lg">
      <div className="relative h-[220px] overflow-hidden rounded-t-sm">
        {img ? (
          <a href={link} target="_blank" rel="noreferrer" aria-label={`Open ${name}`}>
            <img
              src={img}
              className="h-full w-full object-cover duration-[0.5s] hover:scale-[110%]"
              width={390}
              height={220}
              loading="lazy"
              alt={name}
            />
          </a>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-sky-950 to-zinc-900 text-sky-200">
            <FiShoppingCart className="text-5xl" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em]">System project</span>
          </div>
        )}
        {status && (
          <span className="absolute left-3 top-3 rounded-full border border-sky-300/30 bg-sky-950/90 px-3 py-1 text-[11px] font-semibold text-sky-200">
            {status}
          </span>
        )}
      </div>

      <div className="flex min-h-[90px] w-full items-start justify-between gap-3 rounded-b-sm bg-black/70 px-4 py-4">
        <div className="min-w-0">
          <p className="mb-1 text-start text-[10px] font-medium uppercase tracking-wider text-zinc-400">
            {link ? 'View project' : 'Currently building'}
          </p>
          <h2 className="text-lg font-semibold text-white">{name}</h2>
          {description && (
            <p className="mt-2 text-xs leading-5 text-zinc-300">{description}</p>
          )}
          {stack && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-zinc-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${name}`}
            className="shrink-0 text-lg text-white duration-[0.5s] hover:text-sky-600"
          >
            <span className="btn block border-0 px-0 text-lg">
              <CgArrowTopRight />
            </span>
          </a>
        )}
      </div>
    </article>
  );
};

export default CardProject;
