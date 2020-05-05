interface WorkloadProps {
  [key: string]: number;
}

interface Job {
  rates: number[];
  workloadFunction: (props: WorkloadProps) => number;
}

interface ICalculator {
  workload: WorkloadProps;
  jobs: Job[];
  factor: number;
}

function sum(n: number[]): number {
  return n.reduce((s, i) => s + i, 0);
}

export class Calculator {
  private workload: WorkloadProps;
  private jobs: Job[];
  private factor: number;

  constructor({ workload, jobs, factor }: ICalculator) {
    this.factor = factor;
    this.workload = workload;
    this.jobs = jobs;
  }

  calculate(): number {
    return (
      this.jobs.reduce((s: number, job: Job): number => {
        return s + sum(job.rates) * job.workloadFunction(this.workload);
      }, 0) * this.factor
    );
  }

  set(update: ICalculator): void {
    Object.assign(this, update);
  }
}
