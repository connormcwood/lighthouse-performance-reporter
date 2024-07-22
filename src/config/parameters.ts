import { ParsedArgs } from 'minimist';

type AcceptedParameters = {
    url: string[];
};

export function getParameters(args: ParsedArgs): AcceptedParameters {
    const url: string[] = (args.url && typeof args.url === "string") ? args.url.split(',') : args.url;

    return {
        url,
    }
};